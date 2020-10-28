// Arrange the Test suite below from simplest test to most complex

Describe: vowelCounter();

Test: "It recognizes a single vowel."
Expect(vowelCounter("a")).toEqual(1);

Test: "It recognizes a single vowel regardless of case."
Expect(vowelCounter("A")).toEqual(1);

Test: "It recognizes a single vowel in a word with multiple characters."
Expect(vowelCounter("cat")).toEqual(1);

Test: "It recognizes multiple vowels in a single word."
Expect(vowelCounter("cater")).toEqual(2);

Test: "It recognizes vowels in a multiple-word sentence."
Expect(vowelCounter("cats catered the event")).toEqual(7);

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Expect(vowelCounter("CATS CATERED THE EVENT")).toEqual(7);

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Expect(vowelCounter("CaTS CATEReD ThE EveNT")).toEqual(7);

Test: "It ignores non-alphabetical characters since they can't be vowels."
Expect(vowelCounter("*&$92%")).toEqual(0);