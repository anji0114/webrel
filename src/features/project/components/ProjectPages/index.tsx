'use client';

import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { QUERY_KEYS } from '@/constants/queryKey';
import { PageDeleteModal } from '@/features/project/components/PageDeleteModal';
import { PageEditModal } from '@/features/project/components/PageEditModal';
import { ProjectPageItem } from '@/features/project/components/ProjectPages/ProjectPageItem';
import { fetchProjectPagesApi } from '@/features/project/services/projectPagesApi';

type TProjectPagesProps = {
  url: string;
  projectId: string;
};

type TPageData = {
  id: string;
  name: string;
  path: string;
};

export const ProjectPages: FC<TProjectPagesProps> = ({ url, projectId }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [deletePageData, setDeletePageData] = useState<Omit<TPageData, 'path'>>(
    {
      id: '',
      name: '',
    },
  );
  const [editPageData, setEditPageData] = useState<TPageData>({
    id: '',
    name: '',
    path: '',
  });

  const onEditModalOpen = (id: string, name: string, path: string) => {
    setEditPageData({ id, name, path });
    setEditModalOpen(true);
  };

  const onDeleteModalOpen = (id: string, name: string) => {
    setDeletePageData({ id, name });
    setDeleteModalOpen(true);
  };

  const { data: pages } = useQuery({
    queryKey: [QUERY_KEYS.PROJECT.FETCH_PROJECT_PAGES, projectId],
    queryFn: async () => {
      return fetchProjectPagesApi(projectId);
    },
  });

  return (
    <>
      <div className='bg-gray-100 overflow-x-scroll border border-gray-400 rounded-2xl shadow-sm'>
        <div className='min-w-[800px]'>
          {/* title */}
          <div className='px-4 py-6 flex justify-between border-b border-gray-400'>
            <div className='w-[25%] text-sm font-bold'>ページ名</div>
            <div className='w-[20%] text-sm font-bold'>URLパス</div>
            <div className='w-[10%] text-sm font-bold text-center'>
              メニュー
            </div>
            <div className='w-[10%] text-sm font-bold text-center'>リンク</div>
          </div>

          {/* contents */}
          <div className='bg-white rounded-b-2xl'>
            {pages?.length ? (
              <ul>
                {pages?.map((page, index) => (
                  <li
                    key={page.id}
                    className={`${
                      index !== 0 ? 'border-t border-gray-400' : ''
                    }`}
                  >
                    <ProjectPageItem
                      onDeleteModalOpen={() =>
                        onDeleteModalOpen(page.id, page.name)
                      }
                      onEditModalOpen={() =>
                        onEditModalOpen(page.id, page.name, page.path)
                      }
                      name={page.name}
                      path={page.path}
                      url={url}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className='p-4'>
                <div className='w-full p-6 text-center border border-dashed border-gray-400 rounded-lg bg-white shadow-sm'>
                  <p>作成したページはありません。</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {deleteModalOpen && (
        <PageDeleteModal
          open={deleteModalOpen}
          onCancel={() => {
            setDeleteModalOpen(false);
          }}
          projectId={projectId}
          pageId={deletePageData.id}
          pageName={deletePageData.name}
        />
      )}

      {/* edit */}
      {editModalOpen && (
        <PageEditModal
          open={editModalOpen}
          onCancel={() => {
            setEditModalOpen(false);
          }}
          projectId={projectId}
          pageId={editPageData.id}
          pageName={editPageData.name}
          pagePath={editPageData.path}
        />
      )}
    </>
  );
};
