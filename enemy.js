

function spawnEnemy(){
    var enemy
    if (frameCount%150===0) {
            
        enemy=createSprite(1300,500,50,50)
        enemy.shapeColor="red"
        enemy.velocityX=-5;
        enemy.addAnimation("zombie",enemyim)
        enemyGroup.add(enemy)
    }


}