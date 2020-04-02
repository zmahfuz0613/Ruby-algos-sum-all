require_relative "../sum_all.rb"

describe "sum_all" do
  it "returns the sum of all the numbers between and including the two numbers in the array" do
    expect(sum_all([2, 5])).to eq(14)
  end
  it "returns the sum of both numbers if they're the same" do
    expect(sum_all([3,3])).to eq(6)
  end
end
