import { Connection } from 'jsstore';
import jsstoreWorker from 'jsstore/dist/jsstore.worker.min.js?worker';

export default function createConnection() {
  return new Connection(new jsstoreWorker());
}
