// /lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB || "betterauth";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
  // @ts-ignore
  globalThis._mongoClientPromise = clientPromise;
} else {
  // @ts-ignore
  clientPromise = globalThis._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}

export { clientPromise };