const hanoi = (disk, source, middle, destination) => {
    if(disk == 0) {
        console.log(`Disk ${disk} from ${source} to ${destination}`);
        return;
    }

    hanoi(disk-1, source, destination, middle);
    // this is not necessarily the largest place
    console.log(`Disk ${disk} from ${source} to ${destination}`);
    hanoi(disk-1, middle, source, destination);
}

describe('Towers of Hanoi', () => {
    it('should work correcty with 3 plates', () => {
        hanoi(2, 'A', 'B', 'C');
    });
});