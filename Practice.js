let rbuf = Buffer.alloc(26);
for (var i = 65, j = 0; i <= 90; i++, j++) {
  rbuf[j] = i;
}
console.log(rbuf.toString('ascii')); 
