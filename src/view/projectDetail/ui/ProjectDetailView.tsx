'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams, notFound } from 'next/navigation';
import { MOCK_PROJECT_DETAIL } from '@/entities/project/model/mock';
import ProjectDetailSection from '@/features/projectDetail/ui/ProjectDetailSection';
import Button from '@/shared/ui/button/Button';
import { IDEA_FESTIVAL_START } from '@/shared/constants/date';

export default function ProjectDetailView() {
  const router = useRouter();
  const params = useParams();

  const projectId = Number(params.id);
  const project = MOCK_PROJECT_DETAIL.find((p) => p.id === projectId);

  const [memo, setMemo] = useState('');
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);

  const isLoaded = useRef(false);

  useEffect(() => {
    if (!project) return;

    if (typeof window !== 'undefined') {
      const savedMemo = localStorage.getItem(`memo-${project?.id}`);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (savedMemo) setMemo(savedMemo);
    }

    setTimeout(() => {
      isLoaded.current = true;
    }, 0);
  }, [projectId, project]);

  useEffect(() => {
    if (!isLoaded.current || !project) return;

    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(`memo-${project?.id}`, memo);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [memo, projectId, project]);

  useEffect(() => {
    const checkStatus = () => {
      const isOpen = new Date() >= new Date(IDEA_FESTIVAL_START);
      setIsEvaluationOpen((prev) => (prev !== isOpen ? isOpen : prev));

      if (isOpen && typeof timer !== 'undefined') clearInterval(timer);
    };

    const timer = setInterval(checkStatus, 1000);
    checkStatus();
    
    return () => clearInterval(timer);
  }, []);

  if (!project) {
    notFound();
  }

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const handleAssigning = () => router.push('/assigning');
  const handleExiting = () => router.back();

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-80px)] pb-[60px] pt-[134px]">
      <div className="flex flex-col w-[600px] flex-1 justify-between px-[50px]">
        <ProjectDetailSection project={project} />

        <div className="flex flex-col gap-4">
          {isEvaluationOpen ? (
            <>
              <div className='flex flex-col'>
                <span className='text-main font-bold pl-[15px]'>메모</span>
                <textarea
                  className="h-[230px] border border-gray-60 rounded-[10px] p-[15px] focus:outline-none"
                  placeholder="메모 입력하기"
                  value={memo}
                  onChange={handleMemoChange}
                />
              </div>
              <Button onClick={handleAssigning}>점수 부여하기</Button>
              <Button onClick={handleExiting} variant="sub">
                나가기
              </Button>
            </>
          ) : (
            <Button onClick={handleExiting}>나가기</Button>
          )}
        </div>
      </div>
    </div>
  );
}
