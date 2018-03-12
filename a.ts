interface HasLength {
    length: number;
}

function getTotalLength(a: HasLength, b: HasLength) {
    return a.length + b.length;
}

console.log(getTotalLength('aaa', []));
