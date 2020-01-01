function solver(country) {
    switch (country) {
        case  'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
            console.log('Spanish');
            break;
            
        default: console.log('unknown');
        
            break;
    }
}

solver('USA')