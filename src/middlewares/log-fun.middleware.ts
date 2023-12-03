export function logFunMiddleware(req: any, res: any, next: () => void) {
  console.log('----------------------------');
  console.log(`
    
        'HI I'M [-- logFunMiddleware --]'
    
    `);
//   console.log(req);
//   console.log(res);
  console.log('----------------------------');
  next();
}
