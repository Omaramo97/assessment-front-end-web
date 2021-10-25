function GetValue()
{
    const restArr = new Array("Jambo's BBQ","Black's BBQ","Texas Roadhouse");
    const random = restArr[Math.floor(Math.random() * restArr.length)];
    document.getElementById("message").innerHTML=random;
}



