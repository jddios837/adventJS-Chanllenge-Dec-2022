function getFilesToBackup(lastBackup, changes) {
    if (changes.length === 0) return [];
    const listOfChanges = changes
        .filter(e => e[1] > lastBackup)
        .map(e => { return e[0] });
    return [... new Set(listOfChanges)].sort((a, b) => a - b);
}

module.exports = getFilesToBackup;