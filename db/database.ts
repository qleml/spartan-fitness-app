
// the use of this file is to create a database and table if it doesn't exist
import { SQLiteDatabase } from 'expo-sqlite';

export async function seedDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  console.log('currentDbVersion', currentDbVersion);
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
    `);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
    currentDbVersion = 1;
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export async function resetDatabase(db: SQLiteDatabase) {
  await db.execAsync('DROP TABLE IF EXISTS todos');
  // Set the current Database version to 0
  await db.execAsync('PRAGMA user_version = 0');
  console.log('Database has been reset');

  await seedDbIfNeeded(db);
}