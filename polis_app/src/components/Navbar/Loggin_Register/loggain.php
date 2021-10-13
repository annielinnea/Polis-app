<?php 
include 'dbincludes.php'; //Skapa anmslutning till databasen
?>

<html>
<head>
	<title>Logga in</title>
	<?php
		$user = $_POST['username']; // Sparar det som skrevs in i användarnamn textfältet
		$pass = $_POST['password']; // Sparar det som skrevs in i password textfältet
	?>

</head>
<body>

	<?php 

    
	$results = mysqli_query($conn, "SELECT username FROM users WHERE username='$user'"); // Skickar in en query(fråga) till databasen och sprarar svaret i results variabeln



	if (mysqli_num_rows($results) > 0) //Kontrollerar om antalet rader i results är större än 0, eftersom resultaten av querys sparas som rader.
	{
		$passquery = mysqli_query($conn, "SELECT Pass FROM users WHERE username='$user'");

		if (mysqli_num_rows($passquery) ===TRUE) 
		{
			while ($row = mysqli_fetch_assoc($passquery)) 
			{
				$realpass = $row['password'];
			}

			$passcheck = password_verify($pass,$realpass);
			 
			if ($passcheck == 1) 
			{
				echo "Du är nu inloggad";
				echo $passcheck;
				echo $realpass;
				echo $pass;
			}
			else
			{
				echo "Uh Oh! Verkar som om något gick fel, vänligen försök igen";
			}
		}
	} 
	else 
	{
		echo "Uh Oh! Verkar som om något gick fel, vänligen försök igen";
	}

?>


</body>
</html>