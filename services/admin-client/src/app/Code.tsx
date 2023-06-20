'use client';
import { useEffect } from 'react';

import Prism from 'prismjs';
import './styles/prism-custom.css';

require('prismjs/components/prism-json');

export function Code() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const body = '      {"a": 2}  ';
  return (
    <pre>
      <code className={`language-json`}>{body}</code>
    </pre>
  );
}

// 'use client';
// import { useEffect } from 'react';
// import Prism from 'prismjs';
// import './styles/prism-custom.css';

// require('prismjs/components/prism-json');

// export interface CodeProps {
//   code: string;
//   language: string;
// }

// export const Code = (props: CodeProps) => {
//   const { language, code } = props;

//   useEffect(() => {
//     Prism.highlightAll();
//   }, []);

//   return (
//     <div className="Code" data-prismjs-copy-timeout="500">
//       <pre>
//         <code className={`language-json`} data-prismjs-copy="Copy">
//           {code}
//         </code>
//       </pre>
//     </div>
//   );
// };
