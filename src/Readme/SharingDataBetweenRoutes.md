**Displaying an Object as Results**

**Understanding the Scenario:**

Let's assume you have an object fetched from an API or generated in your application that you want to display on the `ResultsPage`. Here's a breakdown of how you can achieve this:

**1. Fetching and Storing Data:**

In your `SearchPage`, after fetching the data, you can pass it as a prop to the `ResultsPage`.

```javascript
// SearchPage.js
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchQuery(e.target.query.value);

    // Simulate fetching data (replace with actual API call)
    const fetchedData = await fetch(`/api/search?query=${searchQuery}`)
      .then(response => response.json());

    navigate(`/results`, { state: { data: fetchedData } });
  };

  // ... rest of the component
};
```

**2. Displaying Data in ResultsPage:**

```javascript
// ResultsPage.js
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      {/* Display data from the object */}
      <h2>Search Results</h2>
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p>
      {/* ... other fields as needed */}
    </div>
  );
};
```

**Explanation:**

1. **Fetching and Passing Data:**
   - The `SearchPage` fetches data based on the search query.
   - It uses the `navigate` function to navigate to the `ResultsPage`, passing the fetched data as part of the `location.state`.
2. **Accessing Data in ResultsPage:**
   - The `useLocation` hook is used to access the `location.state` object.
   - The `data` object is extracted from the state and used to display the relevant information.

**Key Points:**

- **Data Structure:** Ensure that the `fetchedData` object has the appropriate structure to match the desired display.
- **Error Handling:** Implement error handling mechanisms to handle potential errors during data fetching.
- **User Experience:** Provide feedback to the user while data is being fetched, such as loading indicators or messages.
- **Data Privacy:** If sensitive data is being passed, consider security measures to protect it during transmission.

By following these steps and customizing the data display to your specific needs, you can effectively display object data on your `ResultsPage`.
