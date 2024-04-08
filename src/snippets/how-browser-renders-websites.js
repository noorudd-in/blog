export const C1 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        let content = document.getElementById("name").innerText;
        alert(content); // Not accessible.
    </script>
    <title>Example</title>
</head>
<body>
    <h1 id="name">Hi, I am Noor!</h1>
    <div>I am a div tag!</div>
</body>
</html>
`;

export const C2 = `
<div style="display:none">Hidden element</div>
`;
