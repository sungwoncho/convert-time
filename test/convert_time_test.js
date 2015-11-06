var convertTime = require('../index');
var expect = require('chai').expect;

describe("convertTime", function() {
  describe("12-hour time to 24-hour time", function() {
    describe("without format", function() {
      it("translates 2pm to 14:00", function() {
        var result = convertTime('2pm');
        expect(result).to.equal('14:00');
      });

      it("translates 2p.m. to 14:00", function() {
        var result = convertTime('2p.m.');
        expect(result).to.equal('14:00');
      });

      it("translates 2P.M. to 14:00", function() {
        var result = convertTime('2P.M.');
        expect(result).to.equal('14:00');
      });

      it("translates 2 p.m. to 14:00", function() {
        var result = convertTime('2 p.m.');
        expect(result).to.equal('14:00');
      });

      it("translates 2 P.M. to 14:00", function() {
        var result = convertTime('2 P.M.');
        expect(result).to.equal('14:00');
      });

      it("translates 2    P.M. to 14:00", function() {
        var result = convertTime('2    P.M.');
        expect(result).to.equal('14:00');
      });

      it("translates 2    P.M. to 14:00", function() {
        var result = convertTime('2    P.M.');
        expect(result).to.equal('14:00');
      });

      it("translates 2am to 2:00", function() {
        var result = convertTime('2am');
        expect(result).to.equal('2:00');
      });

      it("translates 2a.m. to 2:00", function() {
        var result = convertTime('2a.m.');
        expect(result).to.equal('2:00');
      });

      it("translates 2A.M. to 2:00", function() {
        var result = convertTime('2a.m.');
        expect(result).to.equal('2:00');
      });

      it("translates 2 a.m. to 2:00", function() {
        var result = convertTime('2a.m.');
        expect(result).to.equal('2:00');
      });

      it("translates 2 A.M. to 2:00", function() {
        var result = convertTime('2a.m.');
        expect(result).to.equal('2:00');
      });

      it("translates 2    a.m. to 2:00", function() {
        var result = convertTime('2    a.m.');
        expect(result).to.equal('2:00');
      });

      it("translates 2    A.M. to 2:00", function() {
        var result = convertTime('2    A.M.');
        expect(result).to.equal('2:00');
      });

      it("translates 2:15pm to 14:15", function() {
        var result = convertTime('2:15pm');
        expect(result).to.equal('14:15');
      });

      it("translates 2:15 pm to 14:15", function() {
        var result = convertTime('2:15 pm');
        expect(result).to.equal('14:15');
      });

      it("translates 2:15 P.M. to 14:15", function() {
        var result = convertTime('2:15 P.M.');
        expect(result).to.equal('14:15');
      });

      it("translates 2:15am to 2:15", function() {
        var result = convertTime('2:15am');
        expect(result).to.equal('2:15');
      });

      it("translates 2:15 am to 2:15", function() {
        var result = convertTime('2:15 am');
        expect(result).to.equal('2:15');
      });

      it("translates 2:15 A.M. to 2:15", function() {
        var result = convertTime('2:15 A.M.');
        expect(result).to.equal('2:15');
      });

      it("translates 12:00pm to 12:00", function() {
        var result = convertTime('12:00pm');
        expect(result).to.equal('12:00');
      });
    });

    describe("with format 'hh:mm'", function() {
      it("translates 2:15 am to 2:15", function() {
        var result = convertTime('2:15 am');
        expect(result).to.equal('2:15');
      });
    });

    describe("with format 'HH:mm'", function() {
      it("translates 2:15 am to 02:15", function() {
        var result = convertTime('2:15 am', 'HH:mm');
        expect(result).to.equal('02:15');
      });
    });

    describe("with format 'hh:MM'", function() {
      it("translates 2:8 am to 02:08", function() {
        var result = convertTime('2:8 am', 'hh:MM');
        expect(result).to.equal('2:08');
      });
      it("translates 3:8 pm to 02:08", function() {
        var result = convertTime('3:8 pm', 'hh:MM');
        expect(result).to.equal('15:08');
      });
    });
  });

  describe("24-hour time to 12-hour time", function() {
    describe("without format", function() {
      it("translates 2:00 to 2:00 am", function() {
        var result = convertTime('2:00');
        expect(result).to.equal('2:00 am');
      });

      it("translates 12:00 to 12:00 pm", function() {
        var result = convertTime('12:00');
        expect(result).to.equal('12:00 pm');
      });

      it("translates 15:00 to 3:00 pm", function() {
        var result = convertTime('15:00');
        expect(result).to.equal('3:00 pm');
      });
    });

    describe("with format 'HH:MM a'", function() {
      it("translates 2:00 to 02:00 am", function() {
        var result = convertTime('2:00', 'HH:MM a');
        expect(result).to.equal('02:00 am');
      });
    });

    describe("with format 'hh:MM A'", function() {
      it("translates 2:00 to 2:00 AM", function() {
        var result = convertTime('2:00', 'hh:MM A');
        expect(result).to.equal('2:00 AM');
      });

      it("translates 2:8 to 2:8 AM", function() {
        var result = convertTime('2:8', 'hh:mm A');
        expect(result).to.equal('2:8 AM');
      });
    });

    describe("with format 'hh:MM A'", function() {
      it("translates 2:8 to 2:08 AM", function() {
        var result = convertTime('2:8', 'hh:MM A');
        expect(result).to.equal('2:08 AM');
      });
    });
  });
});
