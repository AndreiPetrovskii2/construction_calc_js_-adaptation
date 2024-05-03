let sum_brick = document.getElementById('sum');
sum_brick.addEventListener('click',function(){
    let select_brick_size = document.getElementById("select_block").value;    
        let select_walls_Value = document.getElementById("select_walls").value;
        let fronton_widht = document.getElementById('front_w').value;
        let fronton_height = document.getElementById('front_h').value;
        let fronton_value = document.getElementById('fronton_value').value;
        let walls_p = document.getElementById('walls').value;
        let walls_height = document.getElementById('walls_height').value;
        let window_height = document.getElementById('window_height').value;
        let window_widht = document.getElementById('window_widht').value;
        let window_quantity = document.getElementById('window_quantity').value;
        let door_height = document.getElementById('door_height').value;
        let door_widht = document.getElementById('door_widht').value;
        let door_quantity = document.getElementById('door_quantity').value;
        let brick_price= document.getElementById('block_price').value;
        let all_results = document.getElementById('all_results');

        let walls_S = walls_p * walls_height; //площадь стены
        wall_S_text.textContent = "Площадь стен: " + walls_S.toFixed(2) + ' м²';
        let fronton_S = ((fronton_height/100) * (fronton_widht / 100) * fronton_value) * 0.5; //площадь фронтона
        fronton_s_text.textContent = "Площадь фронтонов: " + fronton_S.toFixed(2) + ' м²';
        let windows_S = (window_height / 100) * (window_widht / 100) * window_quantity; //площадь окон
        window_S_text.textContent = "Площадь окон: " + windows_S.toFixed(2) + ' м²';
        let door_s = (door_height / 100) * (door_widht / 100) * door_quantity; // площадь дверей
        door_s_text.textContent = "Площадь дверей: " + door_s.toFixed(2) + ' м²';
        let s_total_walls = walls_S + fronton_S - windows_S - door_s; //Итоговая площадь стен с вычетом проемов
        all_walls_S_text.textContent = "Итоговая площадь стен с вычетом проемов: " + s_total_walls.toFixed(2)  + ' м²';

        select_brick_size = select_brick_size.split('х');
        let brick_length=select_brick_size[0]/1000; //размер кирпича в метрах!
        let brick_width=select_brick_size[1]/1000;
        let brick_height=select_brick_size[2]/1000;
        let s_brick_0_5 = (brick_length + 0.01) * (brick_height + 0.01);// площадь блока с тольщиной стен 0.5
        let s_brick_1 = (brick_width + 0.01) * (brick_height + 0.01); // площадь блока с тольщиной стен 1 
        let total_bricks; // сколько нужно блоков на всю площадь
        switch(select_walls_Value) {
            case '0.5':  
                total_bricks = s_total_walls / s_brick_0_5
                all_blocks_need.textContent = ": " + Math.floor(total_bricks) + " шт.";
                block_price_text.textContent = ": " + (brick_price * total_bricks).toFixed(2) + " руб.";
              break;      
            case '1':     
                total_bricks = s_total_walls / s_brick_1;
                all_blocks_need.textContent = ": " + Math.floor(total_bricks) + " шт.";
                block_price_text.textContent = " : " + (brick_price * total_bricks).toFixed(2) + " руб.";
            break;
            case '1.5':           
                total_bricks = (s_total_walls / s_brick_0_5) + (s_total_walls / s_brick_1);
                all_blocks_need.textContent = ": " + Math.floor(total_bricks) + " шт.";
                block_price_text.textContent = ": " + (brick_price * total_bricks).toFixed(2) + " руб.";
            break;
            case '2':              
                total_bricks = (s_total_walls / s_brick_1)*2;
                all_blocks_need.textContent = ": " + Math.floor(total_bricks) + " шт.";
                block_price_text.textContent = ": " + (brick_price * total_bricks).toFixed(2) + " руб.";
            break;
          }
        all_results.style= 'display : flex;'
        sum.style = 'margin-bottom: 20px;'
})