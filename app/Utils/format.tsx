export function formatDuration(minutes: number): string {
    if(!minutes) {
        return "0 min";
        }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    if (hours > 0 && remainingMinutes > 0) {
      return `${hours} hr ${remainingMinutes} min`;
    } else if (hours > 0) {
      return `${hours} hr`;
    } else {
      return `${remainingMinutes} min`;
    }
  }
  