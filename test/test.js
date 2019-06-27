describe("addScoreToMassive", function() {

  it("Корректное добавление счета в массив", function() {
    assert.equal(addScoreToMassive('2:1'),'2 1');
    assert.equal(addScoreToMassive('7:1'),'7 1');
    assert.equal(addScoreToMassive('17:52'),'17 52');
  });

});
describe('', function() {
  it("Корректное сравнение счета команд",function() {
    assert.equal(compareScore([1,4,5]), '0 2 4');
    assert.equal(compareScore([1,5,4]), '0 4 2');
    assert.equal(compareScore([1,6,0]), '2 4 0');
  })
});
