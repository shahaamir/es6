function f1(strings, ...values) {
    console.log(strings[0]); //"foo\n";
    console.log(strings[1]);//"bar";
    console.log(strings.raw[0]);//"foo\\n";
    console.log(strings.raw[1]);//"bar";
    console.log(values[0]);//42;
}

f1 `foo\n${42}bar`; // f1(["foo\\n","bar"], 42)

console.log(String.raw `foo\n${42}bar`); //"foo\\n42bar";
