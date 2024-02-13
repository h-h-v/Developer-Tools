import React, { useState, useEffect } from 'react';
import Tool from './Tool';

const ToolListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState([]);
  const [quickSearchOptions] = useState(['React', 'Node.js', 'JavaScript', 'Python', 'HTML', 'CSS']);

  // Sample data for tool listings
  const tools = [
  { 
    id: 1, 
    name: 'Visual Studio Code', 
    description: 'A powerful code editor developed by Microsoft.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    installLink: 'https://code.visualstudio.com/'
  },
  { 
    id: 2, 
    name: 'GitHub', 
    description: 'A web-based hosting service for version control using Git.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
  },
  { 
    id: 3, 
    name: 'React', 
    description: 'A JavaScript library for building user interfaces.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  { 
    id: 4, 
    name: 'Node.js', 
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  },
  { 
    id: 5, 
    name: 'MongoDB', 
    description: 'A cross-platform document-oriented database program.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg'
  },
  { 
    id: 6, 
    name: 'Angular', 
    description: 'A TypeScript-based open-source web application framework.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
  },
  { 
    id: 7, 
    name: 'Docker', 
    description: 'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png'
  },
  { 
    id: 8, 
    name: 'Postman', 
    description: 'A collaboration platform for API development.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Postman.png'
  },
  { 
    id: 9, 
    name: 'Redux', 
    description: 'A predictable state container for JavaScript apps.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'
  },
  { 
    id: 10, 
    name: 'Jenkins', 
    description: 'An open-source automation server.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Jenkins_logo_with_title.svg'
  },
  { 
    id: 11, 
    name: 'MySQL', 
    description: 'An open-source relational database management system.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/62/MySQL.svg'
  },
  { 
    id: 12, 
    name: 'Bootstrap', 
    description: 'A free and open-source CSS framework directed at responsive, mobile-first front-end web development.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg'
  },
  { 
    id: 13, 
    name: 'Firebase', 
    description: 'A platform developed by Google for creating mobile and web applications.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Firebase_Logo.svg'
  },
  { 
    id: 14, 
    name: 'Express.js', 
    description: 'A web application framework for Node.js.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
  },
  { 
    id: 15, 
    name: 'Python', 
    description: 'An interpreted high-level general-purpose programming language.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
  },
  { 
    id: 16, 
    name: 'AWS', 
    description: 'A subsidiary of Amazon providing on-demand cloud computing platforms and APIs.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
  },
  { 
    id: 17, 
    name: 'Vue.js', 
    description: 'A progressive JavaScript framework for building user interfaces.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg'
  },
  { 
    id: 18, 
    name: 'SQLite', 
    description: 'A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg'
  },
  { 
    id: 19, 
    name: 'Bootstrap', 
    description: 'A free and open-source CSS framework directed at responsive, mobile-first front-end web development.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg'
  },
  { 
    id: 20, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 21, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 22, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 23, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 24, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 25, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 26, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 27, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 28, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 29, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },

  { 
    id: 30, 
    name: 'Flutter', 
    description: 'An open-source UI software development kit created by Google.', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
  },
];

  // Update filtered tools when search term changes
  useEffect(() => {
    const filtered = tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTools(filtered);
  }, [searchTerm]);

  // Handle click on quick search option
  const handleQuickSearch = (option) => {
    setSearchTerm(option);
  };

  return (
    <div style={{ backgroundColor: '#0F0F0F', color: '#FAF0E6', minHeight: '100vh', padding: '20px', fontFamily: 'monospace', textAlign: 'center', overflowY: 'auto' }}>
      <h1>Tool Listing</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search tools..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '50%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#FAF0E6', marginBottom: '20px', fontFamily: 'monospace' }}
      />

      {/* Quick search options */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {quickSearchOptions.map(option => (
          <button key={option} onClick={() => handleQuickSearch(option)} style={{ margin: '0 5px', padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: '#FAF0E6', fontFamily: 'monospace', cursor: 'pointer' }}>
            {option}
          </button>
        ))}
      </div>

      <div>
        {/* Render filtered tools */}
        {filteredTools.map(tool => (
          <Tool key={tool.id} name={tool.name} description={tool.description} imageUrl={tool.imageUrl} installLink={tool.installLink} />
        ))}
      </div>
    </div>
  );
};

export default ToolListPage;