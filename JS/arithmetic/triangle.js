var n = 5, i, j, max_num;
for (i = 1; i <= 5; i++)
    for (j = 1; j <= i; j++)
        cin >> d[i][j];
for (i = 1; i <= n; i++)
    a[n][i] = d[n][i];
for (i = n - 1; i >= 1; i--) {
    max_num = 0;
    for (j = 1; j <= i; j++) {
        if (a[i + 1][j + 1] >= a[i + 1][j])
            a[i][j] = d[i][j] + a[i + 1][j + 1];
        else
            a[i][j] = d[i][j] + a[i + 1][j];
        if (a[i][j] > max_num) {
            max_num = a[i][j];
            flag[i] = d[i][j];    //使用flag[]来记录最优解的路径
        }
    }
}
max_num = 0;
for (i = 1; i <= n - 1; i++) {
    if (a[n - 1][i] > max_num) {
        max_num = a[n - 1][i];
        flag[n] = d[n][i] > d[n][i + 1] ? d[n][i] : d[n][i + 1];
    }
}
console.log(a[i][i]);
for (i = 1; i <= n; i++)
    console.log(flag[i]);
return 0;


