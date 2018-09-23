export const  switchCase = cases => {
      let res;
      for (let e of cases) {
            if (e.case) return res = e.then();
      }
      return res;
};