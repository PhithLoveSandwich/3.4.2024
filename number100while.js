i =1;
sum = 0;
while (i <= 100) {
    document.write(i + ",");
    sum = sum + i;
    if (i == 73) {
        break;
    }
    i ++;
}
document.writeln("sum = " + sum);
