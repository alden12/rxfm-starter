import { attribute, B, Button, classes, Div, event, H1, style } from 'rxfm';
import { BehaviorSubject, timer } from 'rxjs';

import './styles.css';

const Title = H1`Welcome to RxFM!`;

const GetStarted = Div`Start adding components and observables here!`;

const Timer = Div(
  `You've been looking at this page for: `,
  B`${timer(0, 1000)}s`,
  ' so far!'
);

export const ClickCounter = () => {
  const clicks = new BehaviorSubject(0);

  return Button`Clicks: ${clicks}`.pipe(
    event.click(() => clicks.next(clicks.value + 1)),
    style.marginTop`10px`,
  );
};

const Examples = Div(
  Title,
  GetStarted,
  Timer,
  ClickCounter,
).pipe(
  classes`layout`,
);

const App = Div(
  /**
   * Replace these examples with your app code:
   */
  Examples,
).pipe(
  attribute.id`app`,
);

App.subscribe(element => document.body.appendChild(element));
