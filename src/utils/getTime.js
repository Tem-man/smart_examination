export function getTime() {
        let now = new Date();
      
        let year = now.getFullYear();
        let month = format(now.getMonth() + 1);
        let day = format(now.getDate());
        
        let hour = format(now.getHours());
        let minute = format(now.getMinutes());
        let second = format(now.getSeconds());

        function format(t) {
            return t < 10 ? "0"+t :t
        }
    
        return (
          year +
          "/" +
          month +
          "/" +
          day +
          "/" +
          hour +
          "/" +
          minute +
          "/" +
          second
        );
       
      }