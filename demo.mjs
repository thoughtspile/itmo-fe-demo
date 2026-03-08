const name = 'vladimir';
const unused = 'hello';
if (true) {
    console.log(name?.length ?? 0);
} else {
    console.log(unused);
}
