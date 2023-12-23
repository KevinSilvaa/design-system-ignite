import{j as a}from"./jsx-runtime-2ef3df91.js";import{c as B,B as E,d as f}from"./index-f0d23c57.js";import{r as O}from"./index-e03f90b5.js";import"./extends-98964cd2.js";import"./index-ac92abf8.js";import"./_commonjsHelpers-725317a4.js";const R={title:"Data display/Toast",component:B,args:{title:"Toast dispatch",description:"The message has been dispatch",open:!0,type:"normal"},argTypes:{type:{options:["normal","success","error"],control:{type:"inline-radio"}},open:{control:{type:"boolean"}}}},e={},s={args:{type:"success"}},r={args:{type:"error"}},t={argTypes:{open:{table:{disable:!0}},type:{table:{disable:!0}}},decorators:[b=>{const[x,o]=O.useState(!1);return a.jsxs(E,{children:[a.jsx(f,{onClick:()=>o(S=>!S),children:"Click to open/close toast"}),b({args:{title:"Toast dispatch",description:"The message has been dispatch",open:x,setOpen:o}})]})}]};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'error'
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,h,T;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    open: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  },
  decorators: [Story => {
    const [open, setOpen] = useState(false);
    return <Box>
          <Button onClick={() => setOpen(state => !state)}>
            Click to open/close toast
          </Button>

          {Story({
        args: {
          title: 'Toast dispatch',
          description: 'The message has been dispatch',
          open,
          setOpen
        }
      })}
        </Box>;
  }]
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const q=["Primary","Success","Error","ExampleToast"];export{r as Error,t as ExampleToast,e as Primary,s as Success,q as __namedExportsOrder,R as default};
