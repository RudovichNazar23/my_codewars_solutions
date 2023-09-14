

function find(seq) {
    if (seq.length <= 1){ return 0; }

    let sorted_seq = seq.sort((a, b) => a - b);

    let diff = sorted_seq[1] - sorted_seq[0];

    for (let i = 2; i < sorted_seq.length; i++){
        if (sorted_seq[i] - sorted_seq[i - 1] !== diff){
            return sorted_seq[i - 1] + diff;
        }
    }
    return 0;
}

function find(seq) {
    let low = seq[0];
    let high = low;
    for (let i of seq) {
         if (i < low) low = i;
         else if (i > high) high = i;
    }
    let step = (high - low) / seq.length;
    let set = new Set(seq);
    for (let i = low + step; i < high; i += step) {
        if (!set.has(i)) return i;
    }
};

