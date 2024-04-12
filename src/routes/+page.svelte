<script>
    export let data;
  </script>
  
  <style>
    table {
      width: 800px;
      border-collapse: collapse;
    }
    
    th, td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    th {
      background-color: #f5f5f5;
    }
  </style>
  
  <table id="BooksTable">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>ISBN</th>
      </tr>
    </thead>
    <tbody>
      {#each data.books as book}
        <tr>
          <td>{book.Title}</td>
          <td>{book.Author}</td>
          <td>{book.ISBN}</td>
        </tr>
      {/each}
    </tbody>
  </table>