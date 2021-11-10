import { startCore } from './../actions';
import { startEpic } from './../epics';

describe('@core/models/epics', () => {
  it('should trigger the right action', (done) => {
    startEpic()
      .pipe()
      .subscribe((actions) => {
        expect(actions).toMatchObject(startCore());
        done();
      });
  });
});
