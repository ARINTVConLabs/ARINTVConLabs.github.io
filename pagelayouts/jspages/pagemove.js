function movepage() {
    var site = prompt("포털사이트의 이름을 입력하세요 (구글, 네이버, 다음)","");
    var url;

    switch(site) {
    case "구글": url = "www.google.com";
        break;
    case "네이버": url = "www.naver.com";
        break;
    case "다음": url = "www.daum.net";
        break;
    default: alert("보기 내용중에 없는 사이트입니다.");
    }

    if(url)
        location.href = "https://" + url;
}