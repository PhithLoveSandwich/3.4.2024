sum = 0;
while (i <= 100) {
    document.write(i + ",");
    sum = sum + i;
    if (i >= 20) {
        break;
    }
    i += 2;
}
document.writeln("ผลรวม" + sum);
