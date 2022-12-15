<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<title>wildlifespot</title>
		<link rel="stylesheet" href="wildlifespot.css">
	</head>
	<body>
	<nav class="box">
                    
            
					<ul>
						<li><a href=wildlifebank.html> HOME </a></li>
						<li><a href="WildlifeSpot.html"> WILDLIFE SPOT</a></li>
						<li><a href=idea.html> IDEA </a></li>
						<li><a href=team.html> TEAM </a></li>
					   <li><a href=contact.html> CONTACT US </a></li>
					   </ul> 
				
				</nav> 
		<div class="login-box">
			<form>
				<?php
					// database connection code
					// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
					$Name = $_POST['name'];
                    $Phone = $_POST['mobile_no'];
					$Email = $_POST['email'];
					$Specie_name = $_POST['specie_name'];
					$NumberOfAnimal = $_POST['no_of_animals'];
					$Location = $_POST['location'];
					$Pincode = $_POST['pincode'];
                    $State = $_POST['state'];
					
					$conn = new mysqli('localhost', 'root', '','wildlifespot');

					
					
								
						// get the post records
						// database insert SQL code
						$sql = "INSERT Into wildlife(name, mobilenumber, email, speciename, 
								numberofanimals, spotlocation, pincode, state) VALUES (?,?,?,?,?,?,?,?)";
							$stmt = $conn->prepare($sql);
							$stmt->bind_param("ssssssss",$Name, $Phone, $Email, $Specie_name, $NumberOfAnimal, $Location, $Pincode, $State);
							$stmt->execute(); 
							// insert in database 
							?> <h2 style = "color:white;">User Information Inserted!!</h2><?php
						
						$stmt->close();
						$conn->close();
						
					
					?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<!-- <a href="Wildlifebank.html">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Home
					</a>
					
					//header('Location: index.html'); 
					//exit;
				// ?>
			</form>
		</div>
	</body>
</html>