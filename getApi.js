//fetch('http://example.com/movies.json')

<!DOCTYPE html>
<html>
  <head>
    <title>Inicialização a Feth</title>
  </head>
    <body>
    <script>
      fetch(`https://api.exchangeratesapi.io/latest`)
      .then(response => response.json())
      .then(data => console.log(data));
    </script>
    </body>
</html>


