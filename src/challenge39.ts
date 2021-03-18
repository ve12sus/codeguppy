// Implement the Caesar cypher

function mod(n : number, p : number) {
  let n1 = 0;
  if (n < 0) n1 = (p - Math.abs(n)) % p;
  return n1 % p;
}

export function encrypt(msg : string, key : number) : string {
  let encMsg = '';

  for (let i = 0; i < msg.length; i += 1) {
    let code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    encMsg += String.fromCharCode(code);
  }
  return encMsg;
}

export function decrypt(msg : string, key : number) : string {
  return encrypt(msg, key * -1);
}
