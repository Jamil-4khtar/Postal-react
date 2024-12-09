To show the results in a separate page, we'll leverage React Router to handle navigation and routing.

**1. Install React Router:**

```bash
npm install react-router-dom
```

**2. Set up Routing:**

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**3. Update SearchPage:**

```javascript
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.query.value);
    navigate(`/results?query=${searchQuery}`); // Navigate to ResultsPage with query parameter
  };

  // ... rest of the component
};
```

**4. Update ResultsPage:**

```javascript
import { useSearchParams } from 'react-router-dom';

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  // Use the `searchQuery` to fetch and display results
  return (
    <div>
      <p>Search Query: {searchQuery}</p>
      {/* Display results here */}
    </div>
  );
};
```

**Explanation:**

1. **React Router Setup:** The `BrowserRouter`, `Routes`, and `Route` components from `react-router-dom` are used to define the routing structure.
2. **Navigating to ResultsPage:** In the `SearchPage`, after setting the `searchQuery`, we use the `navigate` function from `react-router-dom` to navigate to the `/results` route with the `query` parameter.
3. **Accessing Query Parameter:** In the `ResultsPage`, we use the `useSearchParams` hook to access the `query` parameter from the URL.
4. **Displaying Results:** The `searchQuery` is used to fetch and display the relevant results.

This approach provides a clean separation between the search and results pages, allowing for better organization and user experience.
