import RxFM from 'rxfm';
import { BehaviorSubject, timer } from 'rxjs';

import './styles.css';

const Timer = () => <div>
  You've been looking at this page for:
  <span style={{ fontWeight: 'bold' }}> {timer(0, 1000)}s </span>
  so far!
</div>;

const ClickCounter = () => {
  const clicks = new BehaviorSubject(0);

  return <button onClick={() => clicks.next(clicks.value + 1)} style={{ marginTop: '10px' }}>
    Clicks: {clicks}
  </button>;
};

const Examples = () => <div class="layout">
  <h1>Welcome to RxFM!</h1>
  <div>Start adding components and observables here!</div>
  <Timer />
  <ClickCounter />
</div>;

const App = () => <div id="app">
  {/* Replace these examples with your app code: */}
  <Examples />
</div>;

App().subscribe(element => document.body.appendChild(element));
