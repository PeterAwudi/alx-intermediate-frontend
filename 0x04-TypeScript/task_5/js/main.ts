interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}

const majorCredits1: MajorCredits = { credits: 10, brand: 'major' };
const majorCredits2: MajorCredits = { credits: 20, brand: 'major' };

const minorCredits1: MinorCredits = { credits: 5, brand: 'minor' };
const minorCredits2: MinorCredits = { credits: 15, brand: 'minor' };

console.log(sumMajorCredits(majorCredits1, majorCredits2));
console.log(sumMinorCredits(minorCredits1, minorCredits2));
