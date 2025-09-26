const EventEmitter = require('events');
const emitter = new EventEmitter();

const eventCounts = {
  'user-login': 0,
  'user-logout': 0,
  'user-purchase': 0,
  'profile-update': 0
};

// Listeners
emitter.on('user-login', (username) => {
  console.log(`${username} has logged in.`);
  eventCounts['user-login']++;
});

emitter.on('user-logout', (username) => {
  console.log(`${username} has logged out.`);
  eventCounts['user-logout']++;
});

emitter.on('user-purchase', (username, item) => {
  console.log(`${username} purchased a ${item}.`);
  eventCounts['user-purchase']++;
});

emitter.on('profile-update', (username, field) => {
  console.log(`${username} updated their ${field}.`);
  eventCounts['profile-update']++;
});

emitter.on('summary', () => {
  console.log("\n📊 Event Summary:");
  for (const [event, count] of Object.entries(eventCounts)) {
    console.log(`${event}: ${count} time(s)`);
  }
});

// ----------------------
// 🔥 Simulation Logic
// ----------------------
const users = ["Alice", "Bob", "Charlie", "Thapa"];
const items = ["Laptop", "Phone", "Headphones", "Book"];
const fields = ["email", "password", "address", "profile picture"];

// Random helper
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Emit 10 random events
for (let i = 0; i < 10; i++) {
  const eventType = random(['user-login', 'user-logout', 'user-purchase', 'profile-update']);
  const user = random(users);

  switch (eventType) {
    case 'user-login':
      emitter.emit('user-login', user);
      break;
    case 'user-logout':
      emitter.emit('user-logout', user);
      break;
    case 'user-purchase':
      emitter.emit('user-purchase', user, random(items));
      break;
    case 'profile-update':
      emitter.emit('profile-update', user, random(fields));
      break;
  }
}

// Finally, show summary
emitter.emit('summary');
