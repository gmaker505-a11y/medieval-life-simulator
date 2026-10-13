#!/usr/bin/env node
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(new URL('../events.js', 'file://' + __filename), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { timeout: 1000 });
const events = sandbox.window.MEDIEVAL_EVENTS;
const errors = [];
const statKeys = new Set(['money','health','happiness','intellect','charm','combat','craft','stealth','faith','reputation']);
const categories = new Set(['market','community','relationships','nobility','crime','survival','education','combat','world','wealth']);
if (!Array.isArray(events) || events.length === 0) {
  console.error('Event catalogue is empty or missing.');
  process.exit(1);
}
const ids = new Set();
const titles = new Set();
events.forEach((event, index) => {
  const label = 'Event #' + (index + 1) + (event && event.title ? ' (' + event.title + ')' : '');
  if (!event || typeof event !== 'object' || Array.isArray(event)) { errors.push(label + ': must be an object'); return; }
  for (const field of ['id','title','text','category']) {
    if (typeof event[field] !== 'string' || !event[field].trim()) errors.push(label + ': missing ' + field);
  }
  if (typeof event.id === 'string') {
    if (ids.has(event.id)) errors.push(label + ': duplicate id "' + event.id + '"');
    ids.add(event.id);
  }
  if (typeof event.title === 'string') {
    if (titles.has(event.title)) errors.push(label + ': duplicate title "' + event.title + '"');
    titles.add(event.title);
  }
  if (!categories.has(event.category)) errors.push(label + ': unknown category "' + event.category + '"');
  if (!Number.isFinite(event.weight) || event.weight <= 0 || event.weight > 100) errors.push(label + ': weight must be greater than 0 and at most 100');
  if (!Number.isInteger(event.minAge) || event.minAge < 0 || event.minAge > 130) errors.push(label + ': minAge must be an integer from 0 to 130');
  if (!Number.isInteger(event.maxAge) || event.maxAge < 0 || event.maxAge > 130 || event.maxAge < event.minAge) errors.push(label + ': maxAge must be valid and at least minAge');
  if (!Array.isArray(event.choices) || event.choices.length < 2 || event.choices.length > 4) {
    errors.push(label + ': must contain 2–4 choices');
  } else {
    event.choices.forEach((choice, ci) => {
      const clabel = label + ', choice #' + (ci + 1);
      if (!Array.isArray(choice) || choice.length !== 5) { errors.push(clabel + ': expected [icon, label, statKey, delta, result]'); return; }
      if (typeof choice[0] !== 'string' || !choice[0].trim()) errors.push(clabel + ': icon is required');
      if (typeof choice[1] !== 'string' || !choice[1].trim()) errors.push(clabel + ': label is required');
      if (!statKeys.has(choice[2])) errors.push(clabel + ': invalid stat key "' + choice[2] + '"');
      if (!Number.isFinite(choice[3]) || Math.abs(choice[3]) > 100) errors.push(clabel + ': delta must be a number between -100 and 100');
      if (typeof choice[4] !== 'string' || !choice[4].trim()) errors.push(clabel + ': result text is required');
    });
  }
});
if (errors.length) {
  console.error('Event validation failed with ' + errors.length + ' issue(s):\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Event validation passed: ' + events.length + ' events, ' + events.reduce((n, e) => n + e.choices.length, 0) + ' choices.');
