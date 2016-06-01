var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(0);

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause countdown on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(0);
      timer.handleStatusChange('started');

      setTimeout(() => {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 3001);
    });

    it('should reset countdown on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer(3);
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
