//component.jsx
exports.component = (name) => `import './${name}.scss';

const ${name} = () => {
    return (
        <div>
            
        </div>
    );
};

export default ${name};

${name}.propTypes = {
    
}
${name}.defaultProps = {
    
}
`;
//component.stories.js
exports.story = (name) => `import ${name} from './${name}';

export default {
  title: '${name}',
  component: ${name}
};

const ${name}Template = () => <${name} />;

export const ${name}Example = ${name}Template.bind({});

${name}Example.args = {
    
}
`;
//component.test.jsx
//TODO add testing support to generate scripts
exports.test = (name) => `import { render } from '@testing-library/react';
import ${name} from './${name}';

`;
// index.js
exports.barrel = (name) => `import ${name} from './${name}';

export default ${name};
`;
