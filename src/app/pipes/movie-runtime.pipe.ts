import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'runtime'
  })
  export class MovieRuntimePipe implements PipeTransform {

    // Regex for movie runtime pattern (Example 1h29m)
    private movieDurationRegex: RegExp = /^(\d{1,2}|[xX]{1,2})h([0-5]?[0-9]m|[xX])$/;


    transform(runtimeString: string): string {
      
        if (this.movieDurationRegex.test(runtimeString)) {
            const indexOfH = runtimeString.indexOf("h");

            if (indexOfH !== -1) {
                const hoursPart = runtimeString.substring(0, indexOfH + 1);
                const minutesPart = runtimeString.substring(indexOfH + 1);

                // Remove any additional "h" from the minutesPart
                const cleanMinutesPart = minutesPart.replace(/m/g, "");

                // Format the result
                const formattedString = `${hoursPart} ${cleanMinutesPart}min`;

                return formattedString;
            }
        }
        
        return runtimeString;
    }
  }