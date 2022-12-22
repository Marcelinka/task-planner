import { Connection } from 'jsstore';
import jsstoreWorker from 'jsstore/dist/jsstore.worker.min.js?worker';

const connection = new Connection(new jsstoreWorker());

export default connection;