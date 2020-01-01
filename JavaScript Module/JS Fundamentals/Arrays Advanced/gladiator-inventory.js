function solve(input) {
    let inventory = input.shift().split(' ');

    input.forEach((line) => {

        let [ command, equipment ] = line.split(' ');
        let indexOfEquipment = inventory.indexOf(equipment);

        if (command === 'Buy' && indexOfEquipment === -1) {
            inventory.push(equipment);

        } else if (command === 'Trash' && indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment, 1);

        } else if (command === 'Repair' && indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment, 1);
            inventory.push(equipment);

        }else if (command === 'Update') {
            let tokens = equipment.split('-');
            equipment = tokens[0];
            let upgrade = tokens[1];
            indexOfEquipment = inventory.indexOf(equipment);


            if (indexOfEquipment !== -1) {
                inventory.splice(indexOfEquipment + 1, 0, `${equipment}:${upgrade}`);

            }
        }
    });

    console.log(inventory.join(' '));
    
}

solve(
    [
        'SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Update SWORD-Steel ddd'
    ]
);