package sesac.sesacspring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Controller
@RequiredArgsConstructor
public class FileController {
    private String savePath = "C:/Users/SBA5/Desktop";

    @GetMapping("file-upload")
    public String getFileUpload(){
        return "fileupload";
    }
    @PostMapping("file-upload")
    public String postFileUpload(@RequestParam(name="files", required = false) MultipartFile file) throws Exception {
        if( !file.isEmpty() ) {   //---파일이 없으면 true를 리턴. false일 경우에만 처리함.
            String uuid = UUID.randomUUID().toString()+".jpg";
            File converFile = new File(savePath, uuid);
            file.transferTo(converFile);  //--- 저장할 경로를 설정 해당 경로는 각자 원하는 위치로 설정하면 됩니다. 다만, 해당 경로에 접근할 수 있는 권한이 없으면 에러 발생

            return "redirect:/file-upload";
        }
        return "redirect:/file-upload";
    }
}
