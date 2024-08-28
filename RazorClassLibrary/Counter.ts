export function SaveCount(value: number) {
    localStorage.setItem("count", value.toString());
}

export function GetCount(): number {
    const value = parseInt(localStorage.getItem("count") || "");

    return isNaN(value) ? 0 : value;
}